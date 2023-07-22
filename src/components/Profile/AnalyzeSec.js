import { useEffect, useState, useContext, useRef } from 'react';
import { AuthContext } from '../../context/auth-context';
import * as d3 from 'd3';


const AnalyzeSec = () => {
  const auth = useContext(AuthContext);
  const [bookingState, setBookingState] = useState(null);
  const [loading, setLoading] = useState(true)
  const chartRef = useRef(null)
  const height = 400;

  const renderChart = () => {
    console.log('renderChart render',bookingState)
    if (bookingState) {
      const chartContainer = d3.select(chartRef.current);
      chartContainer.selectAll('*').remove();

      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      const width = 400 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      const svg = chartContainer
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
      

      const xScale = d3.scaleBand().range([0, width]).padding(0.1);
      const yScale = d3.scaleLinear().range([height, 0]);

      xScale.domain(bookingState.map(d => d.month));
      yScale.domain([0, d3.max(bookingState, d => d.income)]);


      svg
        .selectAll('.bar')
        .data(bookingState)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.month))
        .attr('width', xScale.bandwidth())
        .attr('y', d => yScale(d.income))
        .attr('height', d => height - yScale(d.income))
        .attr('fill', 'steelblue');
      
      svg
        .selectAll('.label')
        .data(bookingState)
        .enter()
        .append('text')
        .attr('class', 'label')
        .attr('x', d => xScale(d.month) + xScale.bandwidth() / 2)
        .attr('y', d => yScale(d.income) + 15)
        .attr('text-anchor', 'middle')
        .text(d => new Date(d.month).toLocaleString('en-US', { month: 'short' }))
  
      svg
        .selectAll('.value')
        .data(bookingState)
        .enter()
        .append('text')
        .attr('class', 'value')
        .attr('x', d => xScale(d.month) + xScale.bandwidth() / 2)
        .attr('y', d => yScale(d.income) -5)
        .attr('text-anchor', 'middle')
        .text(d => '$ '+ d.income);
    }
  };

  useEffect(()=>{
    const fetchBooking = async () => {
        try {
            //let responseData = await fetch(`https://capstone-ora-frontend.onrender.com/booking/income/${auth.userId}`)
            let responseData = await fetch(`https://airbnb-main.onrender.com/booking/income/${auth.userId}`)
            
            if(responseData.ok){
              let allBookings = await responseData.json()
              setBookingState(allBookings)
              console.log(allBookings)
              setLoading(false)
            } else {
              throw new Error('Failed to fetch booking data');
            }
        
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    fetchBooking();
  },[auth.userId])

  useEffect(() => {
    renderChart();
  }, [bookingState]);
  return (
    <div>
    {loading ? (
      'Loading' // Show a loading message while data is being fetched
    ) : (
      <>
      <h1>Income By Month</h1>
      <div className="chart"  ref={chartRef} style={{ height: `${height}px` }}></div> 
      </>
    )}
  </div>
  )
}

export default AnalyzeSec