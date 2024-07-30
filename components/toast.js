import { nanoid } from "./nanoid.js";

let toasters = [];
let listeners = [];

export const toastFD = {
  makeToast: function (type, msg, milliseconds) {
    const id = nanoid();
    toasters = [...toasters, { id, type, msg, milliseconds, isActive: true }];
    emitChange();

    if (milliseconds != undefined) {
      setTimeout(() => {
        this.deActiveToast(id);
      }, milliseconds);

      setTimeout(() => {
        this.deleteToast(id);
      }, milliseconds + 300);
    }

    return id;
  },
  clearToasts: function () {
    toasters = [];
    emitChange();
  },
  deleteToast: function (id) {
    toasters = toasters.filter((toast) => toast.id != id);
    emitChange();
  },
  deActiveToast: function (id) {
    toasters = toasters.map((toast) => {
      if (toast.id == id) {
        toast.isActive = false;
      }
      return toast;
    });
    emitChange();
  },
  changeToast: function (type, msg, milliseconds, id) {
    toasters = toasters.map((toast) => {
      if (toast.id == id) {
        toast.type = type;
        toast.msg = msg;
        toast.milliseconds = milliseconds;
      }
      return toast;
    });
    emitChange();

    if (milliseconds != undefined) {
      setTimeout(() => {
        this.deActiveToast(id);
      }, milliseconds);

      setTimeout(() => {
        this.deleteToast(id);
      }, milliseconds + 300);
    }

    return id;
  },
  success: function (msg, milliseconds, id) {
    if (id != undefined) {
      this.changeToast("success", msg, milliseconds, id);
    } else {
      this.makeToast("success", msg, milliseconds);
    }
  },
  info: function (msg, milliseconds, id) {
    if (id != undefined) {
      this.changeToast("info", msg, milliseconds, id);
    } else {
      this.makeToast("info", msg, milliseconds);
    }
  },
  error: function (msg, milliseconds, id) {
    if (id != undefined) {
      this.changeToast("error", msg, milliseconds, id);
    } else {
      this.makeToast("error", msg, milliseconds);
    }
  },
  warning: function (msg, milliseconds, id) {
    if (id != undefined) {
      this.changeToast("warning", msg, milliseconds, id);
    } else {
      this.makeToast("warning", msg, milliseconds);
    }
  },
  waiting: function (msg) {
    return this.makeToast("waiting", msg);
  },

  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return toasters;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
