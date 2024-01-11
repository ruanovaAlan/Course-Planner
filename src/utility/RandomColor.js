
const colors = ['blue', 'orange', 'green', 'red', 'purple', 'pink',
    'cyan', 'magenta', 'teal', 'lavender', 'navy', 'olive',
    'darkgreen', 'darkblue', 'darkred', 'darkgray', 'darkorange', 'darkcyan', 'darkmagenta',
    'darkviolet', 'darkpink', 'darkbrown', 'darkyellow', 'darkteal', 'darkolive', 'darklime',
    'darknavy', 'lightgreen', 'lightblue', 'lightred', 'lightgray',
    'lightorange', 'lightcyan', 'lightmagenta', 'lightviolet', 'lightpink',
    'lightteal', 'lightolive', 'lightnavy']

export function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}