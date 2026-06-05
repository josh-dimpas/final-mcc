<script setup lang="ts">

</script>

<template>
	<div class="min-h-screen text-center snap-center">
		<div class="h-[calc(27vh-3rem)]" />
		<h2>Expectations Vs. Reality</h2>
		<p class="mx-auto py-2 w-4xl">
			One thing that surprised me when I started is the difference in how things are usually done, from what I heard on some of my colleagues on their experience working corporate, I had my expectations.
		</p>
		<div id="culture-items-container" class="flex justify-center gap-10 pt-8">
			<div>
				<h3>Freedom</h3>
				<p class="text-justify">
					I never expected this part on our exercises.
					Instead of being told exactly what to build, we were encouraged to choose our own projects using React and Django.
					<br>
					<br>
					This freedom made learning way more fun and meaningful. I felt adventurous and excited, which kept me motivated throughout the program.
				</p>
			</div>
			<div>
				<h3>Friend</h3>
				<p class="text-justify">
					I was lucky that my co-intern was already a good friend of mine. Because we already knew each other, communication was natural and effortless from day one.
					<br>
					<br>
					We could easily bounce ideas, debug together, and support each other during tough moments. Having that built-in relationship removed a lot of the usual awkwardness of starting somewhere new.
				</p>
			</div>
			<div>
				<h3>Follow</h3>
				<p class="text-justify">
					This is my first experience with proper mentoring and team collaboration. After working solo as a freelancer, I had almost forgotten how valuable it is to learn from others in real time.
					<br>
					<br>
					The mentors were patient, approachable, and genuinely invested in our growth. I looked forward to our discussions and code reviews more than I expected.
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="css" scoped>
#culture-items-container {
 & > div {
    padding: 1.5rem 2rem;
    transition: all .25s ease-in-out;
    width: 23rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 12px;
    background: #0d542b;
    box-shadow:  10px 10px 20px #093c1f inset,
             -10px -10px 20px #116c37 inset;

    p {
        text-align: justify;
    }
 }
}
</style>
