import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        console.log("props value from class constructor", props);

        this.state = {
            count: 0,
            count2: 2
        }
    }
    // called at the end
    componentDidMount() {
        console.log("componentDidMount");
    }

    render() {
        console.log("render");
        
        return (
            <div className="user-card">
            <div className="p-4 bg-white shadow-md rounded-lg">
                <img className="w-24 h-24 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="User Avatar" />
                <div className="text-center mt-4">
                    <button onClick={() => {
                        this.setState({count: this.state.count + 1});
                    }}>Click Me</button>
                    <h2>count: {this.state.count}</h2>
                    <h2>count: {this.state.count2}</h2>
                    <h2 className="text-xl font-semibold">{this.props.name}</h2>
                    <p className="text-gray-600">Software Engineer</p>
                </div>
            </div>
            </div>
        )
    }
}

export default UserClass;