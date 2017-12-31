import React, { Component } from 'react';
import consoleShow from './../../util/debug/consoleShow';
import itemsForSale from './itemsForSale';
import ListingItem from './../../components/ListingItem/ListingItem';
import GridItemShell from './../../components/GridItem/GridItemShell';

export default class YardSales extends Component {
  constructor(props) {
    super(props);
    consoleShow('props', {
      componentName: 'YardSales',
      props: this.props});
    this.childComponent.bind(this);
  }

  childComponent(type, data) {
    return <span className='templateComponent__textBody'>{data}</span>;
  }

  render() {
    require('./YardSales.scss');
    const responsiveConfig = {
      standard: 4,
      sm: 4,
      md: 4,
      lg: 4,
      xl: 4,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
      },
    };
    return (
      <section className='yardSales__container'>
        {itemsForSale.map((item, index) => {
          return (
            <GridItemShell
              gridContent=''
              gridResponsiveProperties={responsiveConfig}
              key={index.toString()} >
              <ListingItem
                content={item}
                type='yardSaleItem'
                style={[]}
              />
            </GridItemShell>
          );
        })}
      </section>
    );
  }
}
