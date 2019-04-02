import React from 'react';

class NavMenu extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            menuAtivo: 'Home'
        }
        this.changeActive = this.changeActive.bind(this);
    }

    changeActive (titulo, self) {
        this.setState({menuAtivo: titulo})
    }
    
    render(){
        let menu = [
            {titulo: 'Home', link: '#home'},
            {titulo: 'Sobre', link: '#sobre'},
            {titulo: 'Contato', link: '#contato'}
        ]

        let self = this;

        let lista = menu.map((value, index) => {
            return (
                <li key={index} className={value.titulo == self.state.menuAtivo ? 'active' : ''} onClick={self.changeActive.bind(null, value.titulo, self)}><a href={value.link}>{value.titulo}</a></li>
            );
        })
        return (
            <ul id="nav-mobile" className="right">
                {lista}
            </ul>
        );
    }
}

export default NavMenu;
