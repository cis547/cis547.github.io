// Highlights the next upcoming lecture (or today's) in the CIS 5470 course schedule.
// Each lecture row in the schedule table carries a data-date="YYYY-MM-DD" attribute.
(function() {
  function highlightCurrentLecture() {
    const table = document.getElementById('schedule');
    if (!table) return;

    const now = new Date();
    const today = now.getFullYear() + '-' +
      String(now.getMonth() + 1).padStart(2, '0') + '-' +
      String(now.getDate()).padStart(2, '0');

    const rows = table.querySelectorAll('tbody tr[data-date]:not(.break-row)');
    rows.forEach(row => row.classList.remove('current-lecture'));

    // ISO date strings compare correctly as plain strings
    for (const row of rows) {
      if (row.dataset.date >= today) {
        row.classList.add('current-lecture');
        break;
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightCurrentLecture);
  } else {
    highlightCurrentLecture();
  }

  // Re-run when the user returns to the tab (the date may have changed)
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
      highlightCurrentLecture();
    }
  });
})();
