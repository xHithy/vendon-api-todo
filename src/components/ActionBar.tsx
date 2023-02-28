import React from 'react';
import { UserModel } from '../models/UserModel';

interface Props {
    resultCount: number;
    setResultCount: React.Dispatch<React.SetStateAction<number>>;
    userID: number;
    setUserID: React.Dispatch<React.SetStateAction<number>>;
    users: UserModel[];
    refetch: any;
    totalResults: number;
    totalPageCount: number;
    selectedPage: number;
    setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
}

const ActionBar = ({
    resultCount,
    setResultCount,
    userID,
    setUserID,
    users,
    refetch,
    totalResults,
    totalPageCount,
    selectedPage,
    setSelectedPage
}: Props) => {
    // Function that handles filtered user
    const handleUserFilter = (id:number) => {
        setUserID(id);
        setSelectedPage(1);
        setResultCount(0);
        refetch();
    }

    // Function that handles change of results per page
    const handleResultFilter = (resultCount:number) => {
        setResultCount(resultCount);
        setSelectedPage(1);
        refetch();
    }

    // Function that handles change of page number
    const handlePageChange = (pageNumber:number) => {
        setSelectedPage(pageNumber);
        refetch();
    }

    let pages = [];
    for (let i = 1; i <= totalPageCount; i++) {
        selectedPage === i
        ? pages.push(<button key={i} className='page-button active' onClick={(e) => handlePageChange(i)}>{ i }</button>)
        : pages.push(<button key={i} className='page-button' onClick={(e) => handlePageChange(i)}>{ i }</button>)
    }

    return (
        <div className='action-bar p-10 flex wrap gap-10 jc-sb ai-c'>
            <div className='paginator flex gap-20 ai-c'>
                <div className='flex gap-10'>
                    { pages.map(page => page) }
                </div>
                Total results: { totalResults }
            </div>
            <div className='actions flex gap-20'>
                <label className='flex col'>
                    <b>Results per page</b>
                    <select value={resultCount} onChange={(e) => handleResultFilter(parseInt(e.target.value))}>
                        <option value='0'>All results</option>
                        <option value='10'>10</option>
                        <option value='25'>25</option>
                        <option value='50'>50</option>
                    </select>
                </label>
                <label className='flex col'>
                    <b>User ID</b>
                    <select value={userID} onChange={(e) => handleUserFilter(parseInt(e.target.value))}>
                        <option value='0'>All users</option>
                        {
                            users.map((user) => (
                                <option key={user.id} value={user.id}>({user.id}) {user.username}</option>
                            ))
                        }
                    </select>
                </label>
            </div>
        </div>
    );
};

export default ActionBar;