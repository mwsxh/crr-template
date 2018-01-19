<div className="container">
    <h1>{ props.title }</h1>
    <p>{ props.body }</p>
    <p>isFetching: { props.isFetching + "" }</p>
    <button onClick={ props.getData }>Click Me!</button>
</div>
