import PropTypes from "prop-types";

export default function Input({ placeholder, onClo }) {
    return (
        <div className="flex justify-center mt-8">
            <div className="w-full max-w-sm min-w-[200px]">
                <input
                    className="flex-grow bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-lg px-4 py-2 transition duration-300 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-400 shadow-sm"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}
Input.prototype = {
    placeholder: PropTypes.string.isRequired

}