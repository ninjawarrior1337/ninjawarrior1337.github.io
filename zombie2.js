for (var i = 0; i < 10; i++)
{
    var justKilled = 0;
    removeZombie("z_"+i);
	numZombiesKilled++;
    justKilled++;
    updatePC(justKilled);

}
