export const siteData = {
  gym: {
    name: 'Aqua Training',
    tagline: 'Powered by Water.',
    location: 'San Diego, CA',
    phone: '(619) 555-0138',
    email: 'swim@aquatraining.com',
    address: '1200 Coast Blvd, La Jolla, CA 92037',
    instagram: 'https://instagram.com/aquatrainingsd',
    hero_image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=1600&q=80',
  },
  stats: [
    { value: '50M', label: 'Olympic Pool' },
    { value: '8', label: 'Swim Lanes' },
    { value: '400+', label: 'Athletes' },
    { value: '18', label: 'Weekly Programs' },
  ],
  programs: [
    { name: 'Masters Swim', sessions: '6×/week', level: 'Intermediate–Elite', desc: 'Coached lap swimming for adults serious about performance. Structured workouts, stroke correction, and race-pace sets.', icon: '🏊' },
    { name: 'Beginner Adult', sessions: '4×/week', level: 'Absolute Beginner', desc: 'Learn proper freestyle, backstroke, breaststroke, and butterfly in a supportive, judgment-free environment.', icon: '💧' },
    { name: 'Triathlon Prep', sessions: '5×/week', level: 'Intermediate', desc: 'Open-water technique, sighting, wetsuit swimming, and brick workouts with run/bike transitions.', icon: '🏅' },
    { name: 'Youth Competitive', sessions: '5×/week', level: 'Ages 8–18', desc: 'High-performance youth training with USAS-certified coaches. Develop speed, technique, and competitive mindset.', icon: '⭐' },
    { name: 'Aqua Fitness', sessions: '8×/week', level: 'All Levels', desc: 'Low-impact, high-resistance water aerobics and strength. Ideal for rehabilitation, seniors, and cross-training athletes.', icon: '🌊' },
    { name: 'Open Water Clinic', sessions: '2×/month', level: 'Intermediate+', desc: 'Pacific Ocean sessions at La Jolla Cove. Navigation, surf entry/exit, and long-course endurance.', icon: '🌅' },
  ],
  coaches: [
    { name: 'Coach Nate', full: 'Nathan Perez', certs: 'USAS Level 3 · ASCA Level 5', bio: 'Former NCAA Division I All-American and USA Swimming developmental coach. Nathan has coached two Olympic trial qualifiers from this facility.' },
    { name: 'Coach Maya', full: 'Maya Tanaka', certs: 'USAS Level 2 · CPR/AED', bio: 'Masters World champion in the 200m butterfly. Maya specializes in advanced stroke mechanics and race tactics for adult athletes.' },
    { name: 'Coach Drew', full: 'Andrew Callahan', certs: 'USAS Level 2 · Tri Coach', bio: 'Three-time Ironman finisher and open water specialist. Drew bridges competitive swimming and triathlon training seamlessly.' },
  ],
  schedule: [
    { day: 'Mon–Fri', time: '5:30 AM', program: 'Masters Swim', coach: 'Nate', lanes: '6' },
    { day: 'Mon/Wed/Fri', time: '7:00 AM', program: 'Aqua Fitness', coach: 'Maya', lanes: '2' },
    { day: 'Tue/Thu', time: '6:00 PM', program: 'Triathlon Prep', coach: 'Drew', lanes: '4' },
    { day: 'Sat', time: '7:00 AM', program: 'Masters Swim', coach: 'Nate', lanes: '8' },
    { day: 'Sat', time: '9:00 AM', program: 'Beginner Adult', coach: 'Maya', lanes: '3' },
    { day: 'Sun', time: '8:00 AM', program: 'Open Water Clinic', coach: 'Drew', lanes: 'Ocean' },
  ],
  pricing: [
    { name: 'Drop-In', price: '$18', period: 'per session', features: ['Lap swim access', 'Locker room', 'Equipment loan', 'Towel service'], highlight: false },
    { name: 'Monthly', price: '$95', period: 'per month', features: ['Unlimited lap swim', 'Coached programs', 'Video analysis (1/mo)', 'Guest pass', 'App tracking'], highlight: true },
    { name: 'Annual', price: '$79', period: 'per month', features: ['Everything in Monthly', 'Race registration support', 'Nutrition consultation', '2 private lessons/yr', '2 guest passes/mo'], highlight: false },
  ],
};
