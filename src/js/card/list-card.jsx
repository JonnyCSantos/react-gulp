import React from 'react';
import Card from './card';

class ListCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        this.addCliques = this.addCliques.bind(this);
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

    render(){
        let {count} = this.state
        let news = [
            {title: 'Title 1', description: 'Lorem Ipsum 1... ', image: 'https://materializecss.com/images/office.jpg', link: '#img-1'},
            {title: 'Title 2', description: 'Lorem Ipsum 2... ', image: 'https://materializecss.com/images/office.jpg', link: '#img-2'},
            {title: 'Title 3', description: 'Lorem Ipsum 3... ', image: 'https://materializecss.com/images/office.jpg', link: '#img-3'},
            {title: 'Title 4', description: 'Lorem Ipsum 1... ', image: 'https://materializecss.com/images/office.jpg', link: '#img-1'},
            {title: 'Title 5', description: 'Lorem Ipsum 2... ', image: 'https://materializecss.com/images/office.jpg', link: '#img-2'},
            {title: 'Title 6', description: 'Lorem Ipsum 3... ', image: 'https://materializecss.com/images/office.jpg', link: '#img-3'},
            {title: 'Title 7', description: 'Lorem Ipsum 1... ', image: 'https://materializecss.com/images/office.jpg', link: '#img-1'},
            {title: 'Title 8', description: 'Lorem Ipsum 2... ', image: 'https://materializecss.com/images/office.jpg', link: '#img-2'},
            {title: 'Title 9', description: 'Lorem Ipsum 3... ', image: 'https://materializecss.com/images/office.jpg', link: '#img-3'},
            {title: 'Title 10', description: 'Lorem Ipsum 1... ', image: 'https://materializecss.com/images/office.jpg', link: '#img-1'},
            {title: 'Title 11', description: 'Lorem Ipsum 2... ', image: 'https://materializecss.com/images/office.jpg', link: '#img-2'},
            {title: 'Title 12', description: 'Lorem Ipsum 3... ', image: 'https://materializecss.com/images/office.jpg', link: '#img-3'}
        ];

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
                <p>Quantidade de cliques: {count}</p>
                {row}
            </div>
        );
    }
}

export default ListCard;
