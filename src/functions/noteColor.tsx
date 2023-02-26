export const noteColor = () => {
    // Returns a number from 1-5 that corresponds to a predefined sticky-note color theme
    const number = Math.floor(Math.random() * 5) + 1;
    return 'sticky-note p-10 sticky-color-' + number
}