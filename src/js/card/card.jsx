import React from 'react';

class Card extends React.Component {
    constructor(props){
        super(props)
        this.contaCliques = this.contaCliques.bind(this)
    }

    contaCliques(){
        return this.props.addCliques;
    }
    
    render(){
        return (
            <div>
                <div className="card sticky-action">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={this.props.image} onClick={this.contaCliques()}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{this.props.title}<i className="material-icons right">more_vert</i></span>
                        <p>Desc</p>
                    </div>
                    <div className="card-action">
                        <a href={this.props.link}>Ver mais...</a>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Título<i className="material-icons right">close</i></span>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
