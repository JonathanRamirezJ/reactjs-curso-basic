import React, {Component} from 'react';

class FormTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
  }

  render(){
    return(
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
               <input
                type="text"
                name="title"
                className=" form-control"
                placeholder="Title" 
                onChange={this.handleInput}
               />
            </div>
            <div className="form-group">
               <input
                type="text"
                name="responsible"
                className=" form-control"
                placeholder="Responsible"
                onChange={this.handleInput}
               />
            </div>
            <div className="form-group">
               <input
                type="text"
                name="description"
                className=" form-control"
                placeholder="Description" 
                onChange={this.handleInput}
               />
            </div>
            <div className="form-group">
               <select
                type="text"
                name="priority"
                className=" form-control"
                onChange={this.handleInput}
               > 
                <option selected disabled>Priority</option>
                <option>low</option>
                <option>medium</option>
                <option>high</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default FormTodo;