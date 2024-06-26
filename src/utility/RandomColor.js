const colors = ['#845EC2', '#4B4453', '#C34A36', '#4E8397', '#D65DB1', '#221D23', '#D1603D', '#FC5130',
    '#14281D', '#355834', '#F05365', '#925E78', '#A31621', '#303633', '#1F487E', '#1F2041', '#2E86AB',
    '#475B5A', '#3A3E3B', '#000000', '#011627', '#46237A', '#FE5D26', '#960200', '#1D8A99'
]

export function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}