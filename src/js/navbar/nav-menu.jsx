import React from 'react';

class NavMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {menuAtivo: 'Home'};
        this.changeActive = this.changeActive.bind(this);
    }

    changeActive (titulo, self) {
        this.setState({menuAtivo: titulo})
    }
    
    render(){

        let self = this;

        let lista = this.props.menu.map(function(value){

            return (
            <li key={value.title} onClick={self.changeActive.bind(null,value.title,self)} className={self.state.menuAtivo == value.title ? 'active' : ''} ><a href={value.link}>{value.title}</a></li>
            );
        });

        return (
            <ul id="nav-mobile" className="right">
            {lista}
            </ul>
        );
    }
}

export default NavMenu;
