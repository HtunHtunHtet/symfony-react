import React, {Component} from 'react';
import RepLogList from './RepLogList';
import RepLogs from './RepLogs';
import propTypes from 'prop-types';
import uuid from 'uuid/v4';
import { getRepLogs, deleteRepLog, createRepLog} from "../api/rep_log_api";

export default class RepLogApp extends Component {

    constructor(props) {
        super (props);



        this.state =  {
            highlightedRowId :null,
            repLogs : [],
            numberOfHearts: 1,
            isLoaded :false
        }

        this.handleRowClick = this.handleRowClick.bind(this)
        this.handleAddRepLog= this.handleAddRepLog.bind(this)
        this.handleHeartChange = this.handleHeartChange.bind(this)
        this.handleDeleteRepLog = this.handleDeleteRepLog.bind(this)
    }

    componentDidMount() {
        getRepLogs()
            .then((data) =>{
              this.setState({
                    repLogs : data,
                    isLoaded : true
              })
            })
    }

    handleRowClick (repLogId ) {
        this.setState({highlightedRowId: repLogId})
    }

    handleAddRepLog(item, reps) {
        //const repLogs = this.state.repLogs;
        const newRep  =  {
            reps: reps,
            item: item

        }

        createRepLog( newRep )
            .then(repLog => {
               this.setState(prevState => {
                   const newRepLogs =[...prevState.repLogs, repLog];
                   return {repLogs: newRepLogs}
               })
            })
    }

    handleHeartChange(heartCount) {
        this.setState({
            numberOfHearts : heartCount
        })
    }

    handleDeleteRepLog(id){
        //remove the rep log without mutating state
        //filter return a new array

        deleteRepLog(id);

        this.setState ((prevState) => {
            return {
                repLogs: prevState.repLogs.filter(repLog => repLog.id !== id)
            }
        })

    }

    render() {

        return(
            <RepLogs
                {...this.props}
                {...this.state}
                onRowClick        = {this.handleRowClick}
                onAddRepLog       = {this.handleAddRepLog}
                onHeartChange     = {this.handleHeartChange}
                onDeleteRepLog    = {this.handleDeleteRepLog}
            />
            )
    }
}

RepLogApp.propTypes = {
    highlightedRowId : propTypes.any,
    withHeart : propTypes.bool
}
