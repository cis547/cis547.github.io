// Week highlighting script for CIS 5470 course schedule
(function() {
  // Function to apply week highlighting
  function highlightCurrentWeek() {
    console.log('Week highlighter script running...');
    
    // Get today's date
    const today = new Date();
    
    // Week date ranges - each week from Monday to Sunday
    const weekDates = [
      { start: new Date('2026-08-25'), end: new Date('2026-08-30') }, // Week 1
      { start: new Date('2026-08-31'), end: new Date('2026-09-06') }, // Week 2
      { start: new Date('2026-09-07'), end: new Date('2026-09-13') }, // Week 3
      { start: new Date('2026-09-14'), end: new Date('2026-09-20') }, // Week 4
      { start: new Date('2026-09-21'), end: new Date('2026-09-27') }, // Week 5
      { start: new Date('2026-09-28'), end: new Date('2026-09-30') }, // Week 6
      { start: new Date('2026-10-01'), end: new Date('2026-10-04') }, // Week 7 (Fall Break)
      { start: new Date('2026-10-05'), end: new Date('2026-10-11') }, // Week 8
      { start: new Date('2026-10-12'), end: new Date('2026-10-18') }, // Week 9
      { start: new Date('2026-10-19'), end: new Date('2026-10-25') }, // Week 10
      { start: new Date('2026-10-26'), end: new Date('2026-11-01') }, // Week 11
      { start: new Date('2026-11-02'), end: new Date('2026-11-08') }, // Week 12
      { start: new Date('2026-11-09'), end: new Date('2026-11-15') }, // Week 13
      { start: new Date('2026-11-16'), end: new Date('2026-11-22') }, // Week 14
      { start: new Date('2026-11-23'), end: new Date('2026-11-29') }, // Week 15 (Thanksgiving)
      { start: new Date('2026-11-30'), end: new Date('2026-12-06') }, // Week 16
      { start: new Date('2026-12-07'), end: new Date('2026-12-09') }, // Week 17
      { start: new Date('2026-12-10'), end: new Date('2026-12-17') }  // Finals
    ];
    
    // Find current week
    let currentWeekIndex = -1;
    
    // Set the time to midnight for accurate date comparison
    today.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < weekDates.length; i++) {
      weekDates[i].start.setHours(0, 0, 0, 0);
      weekDates[i].end.setHours(23, 59, 59, 999);
      
      if (today >= weekDates[i].start && today <= weekDates[i].end) {
        currentWeekIndex = i;
        break;
      }
    }
    
    // If before semester starts, highlight week 1
    if (currentWeekIndex === -1 && today < weekDates[0].start) {
      currentWeekIndex = 0;
    }
    
    // Apply highlighting
    if (currentWeekIndex >= 0) {
      const tables = document.querySelectorAll('table');
      
      // Find the course schedule table (the one with Week, Dates, Topic headers)
      tables.forEach(function(table) {
        const firstHeader = table.querySelector('th');
        if (firstHeader && firstHeader.textContent === 'Week') {
          const rows = table.querySelectorAll('tbody tr');
          
          if (rows[currentWeekIndex]) {
            // Remove any existing current-week classes
            rows.forEach(row => row.classList.remove('current-week'));
            // Add current-week class to the current week's row
            rows[currentWeekIndex].classList.add('current-week');
            
            // Debug: Log to console
            console.log('Highlighted week', currentWeekIndex + 1, 'for date', today.toDateString());
          }
        }
      });
    }
  }
  
  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightCurrentWeek);
  } else {
    // DOM is already ready
    highlightCurrentWeek();
  }
  
  // Also run on page visibility change (for when user returns to tab)
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
      highlightCurrentWeek();
    }
  });
})();