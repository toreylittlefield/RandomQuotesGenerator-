

const Header = () => {
    //Add SVG into the searchbar
    // const returnSVG = () => {
    //     return (
    //         <img src="https://img.icons8.com/office/16/000000/search--v2.png" />
    //     )
    // }

    return (
        <div className="headerDiv">
            <h1>Macs <span style={{ color: 'grey', fontStyle: 'italic' }}>Quote</span>  Generator</h1>
            <input type='text' placeholder="Search" style={{ fontSize: '1.25rem', borderRadius: '5px' }} />
        </div>

    )
}

export default Header;