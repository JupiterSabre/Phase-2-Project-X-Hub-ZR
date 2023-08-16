import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    //THE ERROR IS GIVEN WHEN THERES A ROUTING ERROR (404 OR THROWN IN LOADER)

    const error = useRouteError()

    console.log(error)

    return (
            <>

        <p>OH, BOY, THIS ISN'T WHERE YOU PUT YOUR CAR...</p>
        <p>{error.status}</p>
        {/* THE BELOW ACCOUNTS FOR A VARIETY OF THINGS THAT CAN BE THROWN BY AN ERROR */}
        <p>{error.StatusText || error.message || error.data}</p>

    </>

    )

}

export default ErrorPage