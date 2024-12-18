async function fetchDataWithDelay() {
    // Simulate a delay of 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 100));
    return { message: 'Hello, World!' };
  }
  
  export default async function Content() {
    const data = await fetchDataWithDelay();
  
    return <p>{data.message}</p>;
  }
  