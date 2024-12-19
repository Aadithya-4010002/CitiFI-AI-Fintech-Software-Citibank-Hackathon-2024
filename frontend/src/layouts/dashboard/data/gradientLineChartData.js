import axios from 'axios';
import { useEffect, useState } from 'react';

const useGradientLineChartData = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/financial-insights');
        setChartData(response.data);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  return { chartData, loading };
};

export default useGradientLineChartData;