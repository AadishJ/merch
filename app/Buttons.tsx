export default function Buttons()
{
    return (
        <div>
            <div className="m-4 flex gap-2 max-sm:overflow-scroll">
                <button className="border border-black rounded-3xl px-4 font-noigrotesk font-medium max-sm:h-10 max-sm:text-sm">
                    ALL
                    <span className="text-xs font-semibold">65</span>
                </button>
                <button className="border border-black rounded-3xl px-4 font-noigrotesk font-medium max-sm:h-10 max-sm:text-sm">
                    WINTERS COLLECTIONS
                    <span className="text-xs font-semibold">65</span>
                </button>
                <button className="border border-black rounded-3xl px-4 bg-black text-white font-noigrotesk font-medium max-sm:h-10 max-sm:text-sm">
                    NEW ARRIVALS
                    <span className="text-xs font-semibold hidden">65</span>
                </button>
                <button className="border border-black rounded-3xl px-4 font-noigrotesk font-medium max-sm:h-10 max-sm:text-sm">
                    BEST SELLERS
                    <span className="text-xs font-semibold">65</span>
                </button>
                <button className="border border-black rounded-3xl px-4 font-noigrotesk font-medium max-sm:h-10 max-sm:text-sm">
                    MEN&apos;S COLLECTION
                    <span className="text-xs font-semibold">65</span>
                </button>
                <button className="border border-black rounded-3xl px-4 font-noigrotesk font-medium max-sm:h-10 max-sm:text-sm">
                    LUXURY COLLECTION
                    <span className="text-xs font-semibold">65</span>
                </button>
            </div>
        </div>
    );
}
