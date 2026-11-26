// ============================================================
// app.js — what your site DOES.
// Plain JavaScript, no libraries, no installs.
// It uses STARTUP and LISTINGS from data.js (loaded first).
// ============================================================

(function () {
  "use strict";

  const storage = {
    get: function (key, fallback) {
      try {
        const saved = localStorage.getItem(key);
        return saved === null ? fallback : JSON.parse(saved);
      } catch (error) {
        return fallback; // storage blocked or broken: just carry on
      }
    },
    set: function (key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        // storage blocked (e.g. private window): ignore
      }
    }
  };

  let postedAvailability = storage.get("goalieAvailability", []);
  document.title = STARTUP.name;

  function showView() {
    const requested = (window.location.hash || "#home").slice(1);
    const views = document.querySelectorAll("[data-view]");
    const exists = Array.prototype.some.call(views, function (view) {
      return view.id === requested;
    });
    const current = exists ? requested : "home";

    views.forEach(function (view) {
      view.hidden = view.id !== current;
    });

    document.querySelectorAll("header nav a").forEach(function (link) {
      if (link.getAttribute("href") === "#" + current) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", showView);

  function addOptions(select, values) {
    values.forEach(function (value) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }

  const goalieProfile = document.getElementById("goalie-profile");
  GOALIES.forEach(function (goalie) {
    const option = document.createElement("option");
    option.value = goalie.id;
    option.textContent = goalie.name + " — " + goalie.level;
    goalieProfile.appendChild(option);
  });

  ["goalie-rink", "captain-rink"].forEach(function (id) {
    addOptions(document.getElementById(id), RINKS);
  });
  ["goalie-time", "captain-time"].forEach(function (id) {
    addOptions(document.getElementById(id), GAME_TIMES);
  });

  document.getElementById("goalie-date").value = "2026-12-05";
  document.getElementById("captain-date").value = "2026-12-05";
  document.getElementById("goalie-time").value = "7:30 PM";
  document.getElementById("captain-time").value = "7:30 PM";
  document.getElementById("goalie-rink").value = "Harbourview Arena";
  document.getElementById("captain-rink").value = "Harbourview Arena";

  document.getElementById("goalie-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const entry = {
      goalieId: goalieProfile.value,
      rink: document.getElementById("goalie-rink").value,
      date: document.getElementById("goalie-date").value,
      time: document.getElementById("goalie-time").value
    };
    postedAvailability = postedAvailability.filter(function (item) {
      return !(item.goalieId === entry.goalieId && item.rink === entry.rink &&
        item.date === entry.date && item.time === entry.time);
    });
    postedAvailability.push(entry);
    storage.set("goalieAvailability", postedAvailability);

    const goalie = GOALIES.find(function (item) { return item.id === entry.goalieId; });
    const status = document.getElementById("goalie-status");
    status.textContent = goalie.name + " is posted as available for " + formatDate(entry.date) + " at " + entry.time + ", " + entry.rink + ".";
    status.hidden = false;
  });

  function formatDate(dateString) {
    const date = new Date(dateString + "T12:00:00");
    return new Intl.DateTimeFormat("en-CA", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(date);
  }

  function findMatches(rink, date, time) {
    const allAvailability = AVAILABILITY.concat(postedAvailability);
    const matches = allAvailability.filter(function (entry) {
      return entry.rink === rink && entry.date === date && entry.time === time;
    });
    const seen = {};
    return matches.map(function (entry) {
      return GOALIES.find(function (goalie) { return goalie.id === entry.goalieId; });
    }).filter(function (goalie) {
      if (!goalie || seen[goalie.id]) return false;
      seen[goalie.id] = true;
      return true;
    });
  }

  function renderResults() {
    const rink = document.getElementById("captain-rink").value;
    const date = document.getElementById("captain-date").value;
    const time = document.getElementById("captain-time").value;
    const matches = findMatches(rink, date, time);
    const grid = document.getElementById("goalie-results");
    grid.replaceChildren();
    document.getElementById("confirmation").hidden = true;
    document.getElementById("result-summary").textContent =
      formatDate(date) + " · " + time + " · " + rink;

    if (matches.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-results";
      empty.textContent = "No goalies posted for this game yet.";
      grid.appendChild(empty);
      return;
    }

    matches.forEach(function (goalie) {
      const card = document.createElement("article");
      card.className = "goalie-card";

      const identity = document.createElement("div");
      identity.className = "goalie-identity";
      const avatar = document.createElement("div");
      avatar.className = "avatar";
      avatar.textContent = goalie.initials;
      avatar.setAttribute("aria-hidden", "true");
      const nameBlock = document.createElement("div");
      const name = document.createElement("h3");
      name.textContent = goalie.name;
      const level = document.createElement("p");
      level.textContent = goalie.level;
      nameBlock.append(name, level);
      identity.append(avatar, nameBlock);

      const button = document.createElement("button");
      button.type = "button";
      button.className = "button request-button";
      button.textContent = "Request goalie";
      button.addEventListener("click", function () {
        showConfirmation(goalie.name, rink, date, time);
      });

      card.append(identity, button);
      grid.appendChild(card);
    });
  }

  function showConfirmation(name, rink, date, time) {
    const confirmation = document.getElementById("confirmation");
    document.getElementById("confirmation-text").textContent =
      name + " · " + rink + " · " + formatDate(date) + " · " + time;
    confirmation.hidden = false;
    confirmation.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  document.getElementById("captain-form").addEventListener("submit", function (event) {
    event.preventDefault();
    renderResults();
  });

  renderResults();
  showView();
})();
