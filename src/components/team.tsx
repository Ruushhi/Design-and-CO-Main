export default function Team() {
  const team = [
    {
      name: 'Ethan Cole',
      role: 'Lead Designer',
    },
    {
      name: 'Lucas Grant',
      role: 'Creative Director',
    },
    {
      name: 'Noah Reed',
      role: 'Senior Architect',
    },
    {
      name: 'Adrian Blake',
      role: 'Project Manager',
    },
  ];

  return (
    <section id="team" className="py-20 px-6 bg-white">
      {/* <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
          The Minds Behind<br />the Design
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-full h-64 bg-gray-400 rounded-sm flex items-center justify-center mb-4">
                <div>
                  <p className="text-white">Team Member</p>
                  <p className="text-gray-200 text-xs mt-1">(Replace with image)</p>
                </div>
              </div>
              <h3 className="text-lg font-light mb-1">{member.name}</h3>
              <p className="text-xs text-gray-600 uppercase tracking-wider">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
