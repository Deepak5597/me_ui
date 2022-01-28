import ListHeader from "../utility/ListHeader";
import useGlobal from '../../hooks/useGlobal';

function Party() {
    const { partyData, partyDispatcher } = useGlobal();
    return (
        <main className="h-full flex flex-col">
            <ListHeader listHeading="Party" listCount="40" />
            <div className="m-3 flex-grow flex gap-3">
                <div className="w-1/4 border-2 border-black-200">{partyData.error}</div>
                <div className="w-3/4 border-2 border-black-200"></div>
            </div>
        </main>
    );
}

export default Party;
