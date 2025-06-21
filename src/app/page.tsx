import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#89A8B2] via-[#B3C8CF] to-[#E5E1DA]">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center text-[#2C3E50]">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#5A7B8A] to-[#89A8B2] flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-white">👨‍💻</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#5A7B8A] to-[#2C3E50] bg-clip-text text-transparent">
              안녕하세요!
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#2C3E50]">
              프론트엔드 개발자입니다
            </h2>
            <p className="text-lg text-[#34495E] max-w-2xl mx-auto">
              사용자 경험을 중시하는 웹 개발을 통해 의미 있는 디지털 솔루션을 만들어갑니다.
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-[#5A7B8A] to-[#89A8B2] rounded-full font-semibold text-white hover:from-[#4A6B7A] hover:to-[#7998A2] transition-all duration-300 shadow-lg">
              프로젝트 보기
            </button>
            <button className="px-8 py-3 border-2 border-[#5A7B8A] rounded-full font-semibold text-[#5A7B8A] hover:bg-[#5A7B8A] hover:text-white transition-all duration-300">
              연락하기
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#F1F0E8]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#2C3E50] mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-[#34495E] text-lg leading-relaxed">
                안녕하세요! 저는 사용자 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자입니다.
                React, Next.js, TypeScript 등의 최신 기술을 활용하여 성능이 뛰어나고 사용자 친화적인
                웹사이트를 구축하는 것을 즐깁니다.
              </p>
              <p className="text-[#34495E] text-lg leading-relaxed">
                지속적인 학습과 새로운 기술에 대한 호기심을 바탕으로, 항상 더 나은 사용자 경험을
                제공하기 위해 노력하고 있습니다.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#5A7B8A]">3+</div>
                  <div className="text-[#34495E]">년 경력</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#5A7B8A]">20+</div>
                  <div className="text-[#34495E]">프로젝트</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#5A7B8A]">100%</div>
                  <div className="text-[#34495E]">만족도</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#B3C8CF]/30 to-[#89A8B2]/30 p-8 rounded-2xl border border-[#B3C8CF]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">주요 관심사</h3>
              <ul className="space-y-4 text-[#34495E]">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#5A7B8A] rounded-full"></span>
                  사용자 경험(UX) 디자인
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#5A7B8A] rounded-full"></span>
                  반응형 웹 디자인
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#5A7B8A] rounded-full"></span>
                  성능 최적화
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#5A7B8A] rounded-full"></span>
                  최신 웹 기술 트렌드
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#2C3E50] mb-12">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-[#F1F0E8]/80 p-8 rounded-2xl border border-[#E5E1DA] shadow-lg">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6 flex items-center gap-3">
                <span className="text-3xl">🎨</span>
                Frontend
              </h3>
              <div className="space-y-4">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-[#34495E]">{skill}</span>
                    <div className="w-24 h-2 bg-[#E5E1DA] rounded-full">
                      <div className="w-20 h-2 bg-gradient-to-r from-[#5A7B8A] to-[#89A8B2] rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-[#F1F0E8]/80 p-8 rounded-2xl border border-[#E5E1DA] shadow-lg">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6 flex items-center gap-3">
                <span className="text-3xl">⚙️</span>
                Backend
              </h3>
              <div className="space-y-4">
                {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST API'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-[#34495E]">{skill}</span>
                    <div className="w-24 h-2 bg-[#E5E1DA] rounded-full">
                      <div className="w-16 h-2 bg-gradient-to-r from-[#5A7B8A] to-[#89A8B2] rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-[#F1F0E8]/80 p-8 rounded-2xl border border-[#E5E1DA] shadow-lg">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6 flex items-center gap-3">
                <span className="text-3xl">🛠️</span>
                Tools
              </h3>
              <div className="space-y-4">
                {['Git', 'VS Code', 'Figma', 'Postman', 'Docker', 'Vercel'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-[#34495E]">{skill}</span>
                    <div className="w-24 h-2 bg-[#E5E1DA] rounded-full">
                      <div className="w-18 h-2 bg-gradient-to-r from-[#5A7B8A] to-[#89A8B2] rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#F1F0E8]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#2C3E50] mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white/80 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg border border-[#E5E1DA]">
              <div className="h-48 bg-gradient-to-br from-[#5A7B8A] to-[#89A8B2] flex items-center justify-center">
                <span className="text-6xl">🛒</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">E-Commerce Platform</h3>
                <p className="text-[#34495E] mb-4">React와 Node.js를 활용한 온라인 쇼핑몰 플랫폼</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Node.js', 'MongoDB'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#B3C8CF]/50 text-[#5A7B8A] rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-[#5A7B8A] rounded-lg text-white text-sm hover:bg-[#4A6B7A] transition-colors">
                    Live Demo
                  </button>
                  <button className="px-4 py-2 border border-[#5A7B8A] rounded-lg text-[#5A7B8A] text-sm hover:bg-[#5A7B8A] hover:text-white transition-colors">
                    GitHub
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white/80 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg border border-[#E5E1DA]">
              <div className="h-48 bg-gradient-to-br from-[#89A8B2] to-[#B3C8CF] flex items-center justify-center">
                <span className="text-6xl">📱</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Task Management App</h3>
                <p className="text-[#34495E] mb-4">Next.js와 TypeScript로 개발한 할일 관리 애플리케이션</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Next.js', 'TypeScript', 'Tailwind'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#B3C8CF]/50 text-[#5A7B8A] rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-[#5A7B8A] rounded-lg text-white text-sm hover:bg-[#4A6B7A] transition-colors">
                    Live Demo
                  </button>
                  <button className="px-4 py-2 border border-[#5A7B8A] rounded-lg text-[#5A7B8A] text-sm hover:bg-[#5A7B8A] hover:text-white transition-colors">
                    GitHub
                  </button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white/80 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg border border-[#E5E1DA]">
              <div className="h-48 bg-gradient-to-br from-[#B3C8CF] to-[#E5E1DA] flex items-center justify-center">
                <span className="text-6xl">🎮</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Weather Dashboard</h3>
                <p className="text-[#34495E] mb-4">실시간 날씨 정보를 제공하는 대시보드 애플리케이션</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'API', 'Chart.js'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#B3C8CF]/50 text-[#5A7B8A] rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-[#5A7B8A] rounded-lg text-white text-sm hover:bg-[#4A6B7A] transition-colors">
                    Live Demo
                  </button>
                  <button className="px-4 py-2 border border-[#5A7B8A] rounded-lg text-[#5A7B8A] text-sm hover:bg-[#5A7B8A] hover:text-white transition-colors">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2C3E50] mb-12">Contact Me</h2>
          <p className="text-[#34495E] text-lg mb-8 max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든 연락주세요!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#F1F0E8]/80 p-6 rounded-2xl border border-[#E5E1DA] shadow-lg">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Email</h3>
              <p className="text-[#34495E]">hello@example.com</p>
            </div>
            <div className="bg-[#F1F0E8]/80 p-6 rounded-2xl border border-[#E5E1DA] shadow-lg">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Phone</h3>
              <p className="text-[#34495E]">+82 10-1234-5678</p>
            </div>
            <div className="bg-[#F1F0E8]/80 p-6 rounded-2xl border border-[#E5E1DA] shadow-lg">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Location</h3>
              <p className="text-[#34495E]">서울, 대한민국</p>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <button className="w-12 h-12 bg-gradient-to-r from-[#5A7B8A] to-[#89A8B2] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <span className="text-xl text-white">📘</span>
            </button>
            <button className="w-12 h-12 bg-gradient-to-r from-[#89A8B2] to-[#B3C8CF] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <span className="text-xl text-white">🐙</span>
            </button>
            <button className="w-12 h-12 bg-gradient-to-r from-[#B3C8CF] to-[#E5E1DA] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <span className="text-xl text-[#5A7B8A]">💼</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#5A7B8A]/20 text-center border-t border-[#B3C8CF]">
        <p className="text-[#34495E]">
          © 2024 My Portfolio. Made with ❤️ using Next.js
        </p>
      </footer>
    </main>
  );
}
