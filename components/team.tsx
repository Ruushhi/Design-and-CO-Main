'use client';

export default function Team() {
  const team = [
    {
      name: 'Ethan Cole',
      role: 'Lead Interior Designer',
      bio: 'Ethan brings over a decade of experience in crafting timeless interiors that balance form and function. His design philosophy revolves around creating spaces that reflect personality while maintaining modern elegance.',
    },
    {
      name: 'Lucas Grant',
      role: 'Creative Director',
      bio: 'Lucas oversees the studio\'s creative vision, ensuring every project delivers a distinctive atmosphere. With a strong eye for color, lighting, and texture, he transforms ordinary rooms into meaningful experiences.',
    },
    {
      name: 'Noah Reed',
      role: 'Senior Architect',
      bio: 'Noah specializes in spatial design and architectural planning. His structural expertise and attention to proportion ensure that every concept transitions seamlessly from design to execution.',
    },
    {
      name: 'Adrian Blake',
      role: 'Project Manager',
      bio: 'Adrian coordinates project timelines, client communication, and on-site execution. With his background in construction management, he ensures every design is delivered with precision and efficiency.',
    },
  ];

  return (
    <section id="team" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">(team)</p>
        <h2 className="text-4xl md:text-5xl font-light mb-16">
          The Minds Behind
          <br />
          the Design
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <div key={index} className="flex gap-6">
              <div className="w-32 h-32 bg-gray-300 rounded-lg flex-shrink-0 flex items-center justify-center">
                <p className="text-gray-600 text-sm text-center">Profile Image</p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-light mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
