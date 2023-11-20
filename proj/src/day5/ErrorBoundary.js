import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    state={hasError:false}

    static getDerivedStateFromError(){
        return {hasError:true}
    }
    componentDidCatch(error,info){
        console.log(error);
        console.log(info);
    }
  render() {
    if(this.state.hasError){
        return<h1>something went wrong</h1>
    }
    else{
        return this.props.children;
    }
  }
}

export default ErrorBoundary