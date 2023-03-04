const Pet = (props) => {
    return (
      <>
        <h1>{ props.name}</h1>
        <h1>{ props.animal}</h1>
        <h1>{ props.meal}</h1>
      </>
    )
}
  
export default Pet;