from pathlib import Path
p = Path('c:/Users/91740/OneDrive/Desktop/protein-princess/client/src/pages/Progress.jsx')
text = p.read_text(encoding='utf-8')
old = 'className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[2rem] p-6 shadow-xl shadow-pink-100"'
new = 'className="bg-white/70 dark:bg-[#0d1118] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)]"'
text = text.replace(old, new)
text = text.replace('text-gray-500', 'text-gray-500 dark:text-zinc-400')
text = text.replace('text-gray-400', 'text-gray-400 dark:text-zinc-500')
text = text.replace('text-gray-800', 'text-gray-800 dark:text-white')
text = text.replace('bg-pink-50', 'bg-pink-50 dark:bg-pink-500/10')
text = text.replace('bg-purple-50', 'bg-purple-50 dark:bg-purple-500/10')
text = text.replace('bg-orange-50', 'bg-orange-50 dark:bg-orange-500/10')
p.write_text(text, encoding='utf-8')
print('patched')
