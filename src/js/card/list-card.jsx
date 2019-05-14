import React from 'react';
import axios from 'axios';

import Card from './card';
import Busca from '../busca/busca';


class ListCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            busca: '',
            dados: '',
            servidor: ''
        }
        this.addCliques = this.addCliques.bind(this);
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    addCliques(){
        // console.log('ok');
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    atualizaBusca(evento){
        this.setState({
            busca: evento.target.value
        })
        if(evento.target.value === '' ) {
            this.setState({dados: this.state.servidor});
        }
    }

    onSubmit(evento){
        console.log(this.state.busca);
        let busca = this.state.busca;
        let dados = this.state.servidor;
        let novaLista = dados.filter(function(item){
            if(item.title.toUpperCase().indexOf(busca.toUpperCase()) > -1
            || item.description.toUpperCase().indexOf(busca.toUpperCase()) > -1
            || item.detail.toUpperCase().indexOf(busca.toUpperCase()) > -1){
              return item;
            }
        });
        this.setState({dados: novaLista});
      

        evento.preventDefault();
    }
    
    componentDidMount(){
        let self = this;
        axios.get('http://localhost:8000/servidor.php?dados=1').then(function(response){
            self.setState({
                dados: response.data,
                servidor: response.data
            });
        });

    }

    render(){
        let {count} = this.state
        let news = this.state.dados

        let aux = [];
        let newList = [];
        const qtdLinha = this.props.qtdLinha;
        const tamCol = this.props.tamCol;

        for(let k=0; k < news.length; k++) {
            aux.push(news[k]);
            if(aux.length == qtdLinha) {
                newList.push(aux);
                aux = [];
            } else if (k == news.length - 1) {
                newList.push(aux);
            }
        }
        
        let self = this;
        let item = (group) => {    
            return (
                group.map((item, index) => {
                    return (
                        <div className={'col m' + tamCol} key={index}>
                            <Card title={item.title} description={item.description} image={item.image} link={item.link} addCliques={self.addCliques}/>
                        </div>
                    );
                })
            );
        }

        let row = newList.map((group, index) => {
            return (
                <div className='row' key={index}>
                    {item(group)}
                </div>
            );
        }) 

        return (
            <div>
                <div className="row">
                    <Busca atualizaBusca={this.atualizaBusca} onSubmit={this.onSubmit} busca={this.state.busca}/>
                </div>
                <p>Quantidade de cliques: {count}</p>
                {row}
            </div>
        );
    }
}

export default ListCard;
