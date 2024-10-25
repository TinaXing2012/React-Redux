import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchUser } from "./userSlice";

export default function User() {

    const { loading, users, error } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <>
            <h1>User List</h1>
            {
                loading ? <h2>Loading</h2> :
                    error ? <h2>{error}</h2> :
                        users.length === 0 ? <h2>No User Found</h2> :
                            <ul>
                                {
                                    users.map((u: any) => <li>{u.id}, {u.name}</li>)
                                }
                            </ul>
            }
        </>
    )
}