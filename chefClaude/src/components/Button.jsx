import PropTypes from 'prop-types';

export default function Button({ label, onClick }) {
    return (
        <button className="rounded-lg bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={onClick} >
            {label}
        </button>
    );
}

Button.propTypes = {
    lable: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};
