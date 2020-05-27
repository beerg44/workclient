import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Modify extends React.Component {

    constructor(props) {
        super(props);
        this.state = {imdb: '', img: '', ptype: '', ltype: 0, oldimdb: ''};

        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    add(event){
        var poster = {
            imdb: this.state.imdb,
            ptype : this.state.ptype,
            ltype : this.state.ltype,
            img : this.state.img
          };
      
        axios
        .post('http://localhost:9000/test/', poster)
        .then(() => alert('Poster Created'))
        .catch(err => {
            console.error(err);
        });
        event.preventDefault();
    }

    remove(event){
        var poster = {
            imdb: this.state.imdb,
          };
      
        axios
        .delete('http://localhost:9000/test/', { data: poster })
        .then(() => alert('Poster Deleted'))
        .catch(err => {
            console.error(err);
        });
        event.preventDefault();
    }

    update(event){
        var poster = {
            imdb: this.state.imdb,
            ptype : this.state.ptype,
            ltype : this.state.ltype,
            img : this.state.img,
            oldImdb: this.state.oldimdb
          };
      
        axios
        .put('http://localhost:9000/test/', poster)
        .then(function (response) {
            console.log(response);
            })
        .catch(err => {
            console.error(err);
        });
        event.preventDefault();
    }
  
    render() {
        return (
        <div>
            <form onSubmit={this.add}>
                <label>
                IMDB:
                <input type="text" value={this.state.imdb} name="imdb" onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                Image:
                <input type="text" value={this.state.img} name="img" onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                Type(Movie/TV Series):
                <input type="text" value={this.state.ptype} name="ptype" onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                Language Type(Int):
                <input type="text" value={this.state.ltype} name="ltype" onChange={this.handleChange}/>
                </label>
                <br/>
                <input type="submit" value="Ekle" />
            </form>
            <br/>
            <form onSubmit={this.update}>
                <label>
                Eski IMDB:
                <input type="text" value={this.state.oldimdb} name="oldimdb" onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                IMDB:
                <input type="text" value={this.state.imdb} name="imdb" onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                Image:
                <input type="text" value={this.state.img} name="img" onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                Type(Movie/TV Series):
                <input type="text" value={this.state.ptype} name="ptype" onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                Language Type(Int):
                <input type="text" value={this.state.ltype} name="ltype" onChange={this.handleChange}/>
                </label>
                <br/>
                <input type="submit" value="Güncelle" />
            </form>
            <br/>
            <form onSubmit={this.remove}>
                <label>
                IMDB:
                <input type="text" value={this.state.imdb} name="imdb" onChange={this.handleChange}/>
                </label>
                <br/>
                <input type="submit" value="Sil" />
            </form>
        </div>
        )
    }
}

export default Modify;