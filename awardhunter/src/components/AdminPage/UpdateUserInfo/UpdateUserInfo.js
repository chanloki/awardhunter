import React from 'react';
import Table from '../../Table/Table';

require('./UpdateUserInfo.css');

class UpdateUserInfo extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            
		};
        
        this.buildSchema = this.buildSchema.bind(this);
        this.buildData = this.buildData.bind(this);
    }

    componentDidMount() {
        this.buildSchema(this.props.rawData);
        this.buildData(this.props.rawData);

    }

    componentWillReceiveProps(nextProps) {
        if( nextProps !== this.props ) {
            this.buildSchema(nextProps);
            this.buildData(nextProps);
        }

    }
    
    buildSchema(data) {
        if(data.rawData){
            let temp = data.rawData[0];
            let newSchema = Object.keys(temp);
            newSchema.push('Edit');
            newSchema.push('Delete');
            this.setState({
                schema: newSchema,
            });
        } 
    }

    buildData(data) {
        if(data.rawData){
            let newData = [];
            for( var i = 0; i < data.rawData.length; i++) {
                let innerData = [];
                innerData = Object.values(data.rawData[i])
                newData.push(innerData)
            }
            this.setState({
                data: newData,
            })
        }
    }

    render() {
        return(
            <div>
                <br/>
                <h1>Update User Data</h1>
                <hr />
                <Table schema={this.state.schema} data={this.state.data} />
            </div>
        )
    }
}

export default UpdateUserInfo;