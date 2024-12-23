import create from 'zustand';

const useFormStore = create((set) => ({
  personalInfo: {
    name: '',
    email: '',
  },
  addressDetails: {
    street: '',
    city: '',
    state: '',
    zip: '',
  },
  preferences: {
    newsletter: false,
    termsAccepted: false,
  },
  setPersonalInfo: (info) => set((state) => ({ personalInfo: { ...state.personalInfo, ...info } })),
  setAddressDetails: (details) => set((state) => ({ addressDetails: { ...state.addressDetails, ...details } })),
  setPreferences: (prefs) => set((state) => ({ preferences: { ...state.preferences, ...prefs } })),
}));

export default useFormStore;
