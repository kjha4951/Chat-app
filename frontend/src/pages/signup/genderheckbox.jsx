const Gendercheckbox = ({ onCheckboxChange, selectedGender }) => (
  <div className="flex">
    <div className="form-control">
      <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' && 'selected'}`}>
        <input type="checkbox" className="checkbox border-slate-900" checked={selectedGender === 'male'} onChange={() => onCheckboxChange('male')} />
        <span className="label-text">Male</span>
      </label>
    </div>
    <div className="form-control">
      <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' && 'selected'}`}>
        <input type="checkbox" className="checkbox border-slate-900" checked={selectedGender === 'female'} onChange={() => onCheckboxChange('female')} />
        <span className="label-text">female</span>
      </label>
    </div>
  </div>
);

export default Gendercheckbox;
// export default Gendercheckbox
