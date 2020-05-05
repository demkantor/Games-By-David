import React, {Component} from 'react';
import '../App/App.css';
import Swal from 'sweetalert2'



class Memory extends Component {

    state={
        cardsChosen: [],
        cardsChosenId: [],
        cardArray: [
            {
                name: 'elephant',
                img: '/images/memory/elephant.jpg'
            },
            {
                name: 'elephant',
                img: '/images/memory/elephant.jpg'
            },
            {
                name: 'gazelle',
                img: '/images/memory/gazelle.jpg'
            },
            {
                name: 'gazelle',
                img: '/images/memory/gazelle.jpg'
            },
            {
                name: 'hippo',
                img: '/images/memory/hippo.jpg'
            },
            {
                name: 'hippo',
                img: '/images/memory/hippo.jpg'
            },
            {
                name: 'hyena',
                img: '/images/memory/hyena.jpg'
            },
            {
                name: 'hyena',
                img: '/images/memory/hyena.jpg'
            },
            {
                name: 'lion',
                img: '/images/memory/lion.jpg'
            },
            {
                name: 'lion',
                img: '/images/memory/lion.jpg'
            },
            {
                name: 'zebra',
                img: '/images/memory/zebra.jpg'
            },
            {
                name: 'zebra',
                img: '/images/memory/zebra.jpg'
            }
        ],
        cardsWon: [],
        resultDisplay: 0,
    }

    componentDidMount=()=>{
        console.log('memory time!');
        this.createBoard();
    }

    componentDidUpdate=()=>{
        if (this.state.cardsChosen.length === 2){
            setTimeout(this.checkForMatch(), 600)
        }
    }

    //gameboard
    createBoard=()=>{
        this.setState({
            cardArray: this.state.cardArray.sort(()=>0.5-Math.random())
        })
    }

    //flip card
    flipCard=(event, name)=>{
        const display = event.target;
        const card = event.target.dataset.id;
        display.src=`/images/memory/${name}.jpg`
        this.setState({
            cardsChosen: [...this.state.cardsChosen, this.state.cardArray[card].name],
            cardsChosenId: [...this.state.cardsChosenId, card]
        });
    }

    //check for match
    checkForMatch=()=>{
        let cards = document.querySelectorAll('img.memoryCard');
        const firstOption = this.state.cardsChosenId[0];
        const secondOption = this.state.cardsChosenId[1];
        if (this.state.cardsChosen[0] === this.state.cardsChosen[1]){
            Swal.fire({
                toast: true,
                title: 'Great Job!! You found a match!!',
                showClass: {
                  popup: 'animated fadeInDown'
                },
                hideClass: {
                  popup: 'animated fadeOutUp'
                }
              }).then(()=>{
                cards[firstOption].removeAttribute('src');
                cards[secondOption].removeAttribute('src');
                cards[firstOption].setAttribute('src', '/images/memory/blank.jpg');
                cards[secondOption].setAttribute('src', '/images/memory/blank.jpg');
                cards[firstOption].classList.add('memoryBlank');
                cards[secondOption].classList.add('memoryBlank');
              })
            this.setState({
                cardsWon: [...this.state.cardsWon, this.state.cardsChosen]
            });
        }else {
            Swal.fire({
                toast: true,
                position: 'center-center',
                title: 'Sorry... Try again!',
                showClass: {
                  popup: 'animated fadeInDown'
                },
                hideClass: {
                  popup: 'animated fadeOutUp'
                }
              }).then(()=>{
            cards[firstOption].setAttribute('src', '/images/memory/colors.jpg');
            cards[secondOption].setAttribute('src', '/images/memory/colors.jpg');
              });
        }
        this.setState({
            cardsChosen: [],
            cardsChosenId: []
        });
        this.updateScore();
    }

    reset=()=>{
        let cards = document.querySelectorAll('img.memoryCard');
        for(let i=0; i<cards.length; i++){
            cards[i].setAttribute('src', '/images/memory/colors.jpg');
            cards[i].classList.remove('memoryBlank');
        }
        this.setState({
            cardsChosen: [],
            cardsChosenId: [],
            cardsWon: [],
            resultDisplay: 0
        });
        this.createBoard();
    }

    updateScore=()=>{
        this.setState({resultDisplay: this.state.cardsWon.length});
        if (this.state.cardsWon.length === (this.state.cardArray.length/2)){
            this.setState({resultDisplay: 'Congratulations!! You found them all!!'});
        }
    }


  render() {
        return (
        <>
            <div className="memoryWrapper">
                <div className="memoryContainer">
                    <header className="header">
                        <h1 className="fw-300 t-ucase">Welcome 
                            <br/>
                            <span className="fw-400 t-wide t-big t-ucase">to Memory</span>
                        </h1>
                    </header>
                    <center>
                        <h2 className="memoryScore">Score: {this.state.resultDisplay}</h2>
                        <button className="btn-lg" onClick={this.reset}>Reset</button>
                    </center>
                    <main className="memoryGrid">
                        {this.state.cardArray.map((card, i)=>(
                            <div className="memoryDeck" key={i}>
                                <img className="memoryCard" src={'/images/memory/colors.jpg'} alt={card.name} 
                                    data-id={i} onClick={(event)=>this.flipCard(event, card.name)}/> 
                            </div>
                        ))}
                    </main>
                </div>
            </div>
        </>
        )
    }
}
  
export default Memory;
