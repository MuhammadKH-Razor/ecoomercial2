import React, {Component} from 'react';

class Hooks extends Component {

    state = {
        skor : 0
    }

    componentDidMount() {
        document.title = `react js ${this.state.skor}`;
    }

    componentDidUpdate() {
        document.title = `React js ${this.state.skor}`;
    }

    componentWillUnmount() {
        document.title = `React js Huda`;
    }

    onUpdate = () => {
        if(this.state.skor < 10) {
            this.setState({
                skor : this.state.skor + 1
            })
        }
    }

    render() {
        return (
            <div className="hooks">
                <h1> Ini halam Hooks </h1>
                <h3>{this.state.skor}</h3>
                <button onClick={this.onUpdate}>Update Skor</button>
            </div>
        )
    }
}

// const Hooks = () => {

//     const [skor, ubah] = useState(0);

//     useEffect(() => {
//         document.title = `React js ${skor}`;
//         return () => {
//             document.title = `React js `;
//           }
//     });

//     return (

//         <div>
//             <h1>Skor : {skor}</h1>
//             <button onClick={() => ubah(skor + 1)}>Update Now</button>
//         </div>
//     );
// }

export default Hooks;