import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardList.css';

class CardList extends Component {
  render() {
    const allMetrics = [{name: 'Metric 1'}, {name: 'Metric 2'}, {name: 'Metric 3'}, {name: 'Metric 4'}, {name: 'Metric 5'}, {name: 'Metric 6'}, {name: 'Metric 7'}, {name: 'Metric 8'}]
    const alreadyChosenMetrics = this.props.metrics;
    const availableMetrics = allMetrics.reduce((acc, curr) => {
      for (let i = 0; i < alreadyChosenMetrics.length; i++) {
        if (alreadyChosenMetrics[i].name === curr.name) return acc;
      }
      acc.push(curr);
      return acc;
    }, []);

    return (
      <div id='cardlist'>
        {availableMetrics.map((metric, i) => <div key={i}>hello</div>)}
        {/* {availableMetrics.map((metric, i) => <Card key={i} {...this.props}/>)} */}
      </div>
    );
  }
}

export default CardList;