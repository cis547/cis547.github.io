// Week highlighting script for CIS 5470 course schedule
(function() {
  // Function to apply week highlighting
  function highlightCurrentWeek() {
    console.log('Week highlighter script running...');
    
    // Get today's date
    const today = new Date();
    
    // Week date ranges - each week from Monday to Sunday
    const weekDates = [
      { start: new Date('2025-08-26'), end: new Date('2025-08-31') }, // Week 1
      { start: new Date('2025-09-01'), end: new Date('2025-09-07') }, // Week 2
      { start: new Date('2025-09-08'), end: new Date('2025-09-14') }, // Week 3
      { start: new Date('2025-09-15'), end: new Date('2025-09-21') }, // Week 4
      { start: new Date('2025-09-22'), end: new Date('2025-09-28') }, // Week 5
      { start: new Date('2025-09-29'), end: new Date('2025-10-05') }, // Week 6
      { start: new Date('2025-10-06'), end: new Date('2025-10-12') }, // Week 7
      { start: new Date('2025-10-13'), end: new Date('2025-10-19') }, // Week 8 (Fall Break)
      { start: new Date('2025-10-20'), end: new Date('2025-10-26') }, // Week 9
      { start: new Date('2025-10-27'), end: new Date('2025-11-02') }, // Week 10
      { start: new Date('2025-11-03'), end: new Date('2025-11-09') }, // Week 11
      { start: new Date('2025-11-10'), end: new Date('2025-11-16') }, // Week 12
      { start: new Date('2025-11-17'), end: new Date('2025-11-23') }, // Week 13
      { start: new Date('2025-11-24'), end: new Date('2025-11-30') }, // Week 14 (Thanksgiving)
      { start: new Date('2025-12-01'), end: new Date('2025-12-07') }, // Week 15
      { start: new Date('2025-12-08'), end: new Date('2025-12-10') }, // Week 16
      { start: new Date('2025-12-11'), end: new Date('2025-12-18') }  // Finals
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