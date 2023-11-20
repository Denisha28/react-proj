function Display()
{
    return(
        <div>
            <h1>Nested Component</h1>
        </div>
    )
}
export default function NestedComponent()
{
    return(
        <div>
            <Display />
        </div>
    )
}