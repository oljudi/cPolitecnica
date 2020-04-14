import React, { Component, createContext } from 'react'
import { withRouter } from "react-router-dom";


export const MyContext = createContext()

class MyProvider extends Component {
    state = {

    }
    render() {
        const {

        } = this 
        return (
            <MyContext.Provider
            value = {{

            }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default withRouter(MyProvider);
