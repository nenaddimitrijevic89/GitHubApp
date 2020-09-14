import React from 'react';
import { ErrorMsg } from '../ErrorMsg/ErrorMsg';

class ErrorBoundary extends React.Component {
    constructor() {
      super();
      this.state = {
          hasError: false
        };
    }
  
    static getDerivedStateFromError(error) {
      
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        
        return <ErrorMsg />;
      }
  
      return this.props.children; 
    }
  }

  export { ErrorBoundary }