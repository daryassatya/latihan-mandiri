//Kesimpulan

// - Single vs Multi Thread        = Lingkungan eksekusi 'Task'

// - Blocking vs Non-blocking       = Teknik 'ngoding' (IO related)

// - Synchronous vs Asynchronous   = Teknik 'Ngoding' (HTTP Request related)

// - Concurrent vs Parallel        = Lingkungan eksekusi 'task'


//  Test 1

// Copy Code dibawah ini:
console.log('satu');
setTimeout(() => {
    console.log('dua');
}, 5000);
console.log('tiga');

// Buka di web : http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
