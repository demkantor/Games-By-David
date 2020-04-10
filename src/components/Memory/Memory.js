import React, {Component} from 'react';
import '../App/App.css';



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
        resultDisplay: document.querySelector('#memoryResults')
    }

    componentDidMount=()=>{
        console.log('memory time!');
        this.createBoard();
    }

    //gameboard
    createBoard=()=>{
        this.setState({
            cardArray: this.state.cardArray.sort(()=>0.5-Math.random())
        })
        for (let i=0; i<this.state.cardArray.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', '/images/memory/colors.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', ()=>this.flipCard('data-id'));
            document.querySelector('.memoryGrid').appendChild(card);
        }
    }

    //flip card
    flipCard=(cardId)=>{
        // console.log('flippin card');
        // let cardId = card.getAttribute('data-id');
        this.setState({
            cardsChosen: [...this.state.cardsChosen, this.state.cardArray[cardId].name],
            cardsChosenId: [...this.state.cardsChosenId, cardId]
        });
        this.setAttribute('src', this.state.cardArray[cardId].img);
        if (this.state.cardsChosen.length === 2){
            setTimeout(this.checkForMatch(), 600)
        }
    }

    //check for match
    checkForMatch=()=>{
        let cards = document.querySelectorAll('img');
        const firstOption = this.state.cardsChosenId[0];
        const secondOption = this.state.cardsChosenId[1];
        if (this.state.cardsChosen[0] === this.state.cardsChosen[1]){
            alert('Great Job!! You found a match!!');
            cards[firstOption].setAttribute('src', '/images/memory/blank.jpg');
            cards[secondOption].setAttribute('src', '/images/memory/blank.jpg');
            this.setState({
                cardsWon: [...this.state.cardsWon, this.state.cardsChosen]
            });
        }else {
            alert('Sorry.... try again!');
            cards[firstOption].setAttribute('src', '/images/memory/colors.jpg');
            cards[secondOption].setAttribute('src', '/images/memory/colors.jpg');
        }
        this.setState({
            cardsChosen: [],
            cardsChosenId: []
        });
        // console.log('hi', cardsWon);
        this.state.resultDisplay.textContent = this.state.cardsWon.length;
        if (this.state.cardsWon.length === (this.state.cardArray.length/2)){
            this.state.resultDisplay.textContent = 'Congratulations!! You found them all!!'
        }
    }


  render() {
    return (
      <>
      <div className="memoryWrapper">
          <div className="memoryContainer">
            <h1>Memory Game</h1>
                <h2 className="memoryScore">Score: <span id="memoryResults"> </span></h2>
                <div className="memoryGrid" onClick={()=>this.flipCard("data-id")}></div>
            </div>
        </div>
      </>
    )
  }
}
  
export default Memory;
