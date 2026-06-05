<script setup lang="ts">

</script>

<template>
	<div class="min-h-screen text-center snap-center">
		<div class="h-[calc(24vh-3rem)]" />
		<h2>Key Lessons</h2>
		<p class="pt-2">
			Here are the most important things I wish someone had told me before starting
		</p>
		<div id="lessons-container" class="gap-4 grid grid-cols-2 mx-auto pt-8 w-6xl">
			<div>
				<h4>Technical Lessons</h4>
				<ul class="pl-4 text-justify list-disc">
					<li>Take advantage of the freedom — don't be afraid to experiment with different tools and approaches.</li>
					<li>Validate your tech choices early. It's better to pivot sooner than later.</li>
					<li>Don’t over-engineer. Focus on learning and delivering value first.</li>
				</ul>
			</div>
			<div>
				<h4>Collaboration & Soft Skills</h4>
				<ul class="pl-4 text-justify list-disc">
					<li>Build relationships early. Talk to your co-intern, mentors, and team members.</li>
					<li>Ask for help without hesitation — people here actually want to support you.</li>
					<li>Observe how seniors communicate, especially during code reviews and meetings.</li>
				</ul>
			</div>
			<div>
				<h4>Mindset Shifts</h4>
				<ul class="pl-4 text-justify list-disc">
					<li>Progress > Perfection. It’s okay to make mistakes.</li>
					<li>Collaboration makes you grow faster than working alone.</li>
					<li>A supportive team can turn setbacks into valuable learning moments.</li>
				</ul>
			</div>
			<div>
				<h4>Practical Tips</h4>
				<ul class="pl-4 text-justify list-disc">
					<li>Prepare your development environment before Day 1.</li>
					<li>Take notes during mentoring sessions — you’ll learn a lot.</li>
					<li>Document your progress. It helps when writing your own blueprint later!</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="css" scoped>
#lessons-container {
 & > div {
    text-align: start;
    padding: 1.5rem 2rem;
    transition: all .25s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 8px;
    background: #0d542b;
    box-shadow:  6px 6px 12px #093c1f inset,
                 -6px -6px 12px #116c37 inset;

    p {
        text-align: justify;
    }
 }
}
</style>
