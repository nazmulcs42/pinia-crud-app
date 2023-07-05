import { defineStore } from "pinia"

export const useCommonStore = defineStore('common', {
    state: () => {
        return { 
            alert: { status: "success", message: "New data saved successfully." },
        }
    },

    actions: {
      setAlert: (state, payload) => {
        state.alert = { status: payload.statue, message:payload.message };
      },
      removeAlert: (state) => {
        state.alert = { status: "", message:"" };
      }
    }

  })