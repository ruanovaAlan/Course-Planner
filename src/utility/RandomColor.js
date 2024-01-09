
const colors = ['blue', 'orange', 'green', 'red', 'purple', 'yellow', 'pink', 'gray',
    'cyan', 'magenta', 'lime', 'teal', 'lavender', 'maroon', 'navy', 'olive', 'silver',
    'darkgreen', 'darkblue', 'darkred', 'darkgray', 'darkorange', 'darkcyan', 'darkmagenta',
    'darkviolet', 'darkpink', 'darkbrown', 'darkyellow', 'darkteal', 'darkolive', 'darklime',
    'darknavy', 'darkmaroon', 'lightgreen', 'lightblue', 'lightred', 'lightgray',
    'lightorange', 'lightcyan', 'lightmagenta', 'lightviolet', 'lightpink', 'lightbrown',
    'lightyellow', 'lightteal', 'lightolive', 'lightlime', 'lightnavy', 'lightmaroon']

export function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}